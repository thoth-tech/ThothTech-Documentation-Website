---
title: "Spike Guidance: Integrating Panopto with OnTrack"
---

# Panopto Integration

## Angular Frontend (doubtfire-web)

### 1. Set Up Environment Configuration

**Task**: Add Panopto Configuration to Environment Files

**File Location**: `src/environments/environment.ts` and `src/environments/environment.prod.ts`

**Description**: Add the Panopto API endpoint and client credentials to the environment
configuration files.

**Example**:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  panopto: {
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    apiEndpoint: "https://your.panopto.instance/api",
  },
};

// src/environments/environment.prod.ts
export const environment = {
  production: true,
  panopto: {
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    apiEndpoint: "https://your.panopto.instance/api",
  },
};
```

### 2. Create Authentication Service

**Task**: Implement OAuth2 Authentication Service

**File Location**: `src/app/services`

**Description**: Create a service to handle OAuth2 authentication with Panopto.

**Example**:

```typescript
// src/app/services/panopto-auth.service.ts
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PanoptoAuthService {
  constructor(private http: HttpClient) {}

  getAuthorizationUrl() {
    const params = new HttpParams()
      .set("response_type", "code")
      .set("client_id", environment.panopto.clientId)
      .set("redirect_uri", environment.panopto.redirectUri)
      .set("scope", "openid");
    return `${environment.panopto.authUrl}?${params.toString()}`;
  }

  exchangeCodeForToken(code: string) {
    return this.http.post(environment.panopto.tokenUrl, {
      client_id: environment.panopto.clientId,
      client_secret: environment.panopto.clientSecret,
      redirect_uri: environment.panopto.redirectUri,
      code: code,
      grant_type: "authorization_code",
    });
  }
}
```

### 3. Create Panopto Video Component

**Task**: Implement Component to Embed Panopto Videos

**File Location**: `src/app/components`

**Description**: Create a component that allows users to embed Panopto videos using embed codes.

**Example**:

```typescript
// src/app/components/panopto-video.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-panopto-video",
  template: `
    <div>
      <label for="embed-code">Embed Code:</label>
      <textarea id="embed-code" [(ngModel)]="embedCode"></textarea>
      <div [innerHTML]="embedCode"></div>
    </div>
  `,
  styles: [
    `
      textarea {
        width: 100%;
        height: 100px;
      }
      div {
        margin-top: 20px;
      }
    `,
  ],
})
export class PanoptoVideoComponent {
  embedCode: string = "";
}
```

### 4. Create Video Upload Component

**Task**: Implement Component to Upload Videos to Panopto

**File Location**: `src/app/components`

**Description**: Create a component that allows users to upload videos to Panopto.

**Example**:

```typescript
// src/app/components/video-upload.component.ts
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-video-upload",
  template: `
    <input type="file" (change)="onFileSelected($event)" />
    <button (click)="onUpload()">Upload</button>
  `,
  styles: [
    `
      input {
        margin: 10px 0;
      }
    `,
  ],
})
export class VideoUploadComponent {
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append("file", this.selectedFile, this.selectedFile.name);

    this.http
      .post(`${environment.panopto.apiUrl}/videos`, uploadData, {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`,
        },
      })
      .subscribe((response) => {
        console.log("Upload successful", response);
      });
  }
}
```

### 5. Create Metadata Display Component

**Task**: Implement Component to Display Video Metadata

**File Location**: `src/app/components`

**Description**: Create a component to fetch and display metadata of a Panopto video.

**Example**:

```typescript
// src/app/components/video-metadata.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-video-metadata',
  template: `
    <div *ngIf="metadata">
      <h3>{{ metadata.title }}</h3>
      <p>{{ metadata.description }}</p>
    </div>
  `,
  styles: [`
    h3 {
      margin-top: 0;
    }
  `]
})
export class VideoMetadataComponent implements OnInit {
  @Input() videoId: string;
  metadata: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${environment.panopto.apiUrl}/videos/${this.videoId}`, {
      headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`
      })
    .subscribe(response => {
      this.metadata = response;
    });
  }
}
```

### 6. Integration into Angular Module

**Task**: Update Angular Module

**File Location**: `src/app/doubtfire-angular.module.ts`

**Description**: Add the new components and services to the Angular module.

**Example**:

```typescript
// src/app/components/video-metadata.component.ts
// src/app/doubtfire-angular.module.ts
typescript: import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PanoptoAuthService } from "./services/panopto-auth.service";
import { PanoptoVideoComponent } from "./components/panopto-video.component";
import { VideoUploadComponent } from "./components/video-upload.component";
import { VideoMetadataComponent } from "./components/video-metadata.component";

@NgModule({
  declarations: [AppComponent, PanoptoVideoComponent, VideoUploadComponent, VideoMetadataComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PanoptoAuthService],
  bootstrap: [AppComponent],
})
export class DoubtfireAngularModule {}
```

## Ruby on Rails Backend (doubtfire-api)

### 1. Set Up Authentication

**Task**: Implement OAuth2 Authentication for Panopto

**File Location**: `app/controllers`

**Description**: Create a controller to handle OAuth2 authentication with Panopto.

**Example**:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  get 'auth/panopto/callback', to: 'panopto#callback'
  # other routes...
end

# app/controllers/panopto_controller.rb
class PanoptoController < ApplicationController
  def callback
    response = RestClient.post('https://your.panopto.url/oauth2/token', {
      client_id: ENV['PANOPTO_CLIENT_ID'],
      client_secret: ENV['PANOPTO_CLIENT_SECRET'],
      redirect_uri: 'https://your.ontrack.url/auth/panopto/callback',
      code: params[:code],
      grant_type: 'authorization_code'
    })
    session[:panopto_access_token] = JSON.parse(response.body)['access_token']
    redirect_to root_path
  end
end
```

### 2. Implement Video Upload Functionality

**Task**: Implement Video Upload Functionality

**File Location**: `app/controllers`

**Description**: Create a controller action to handle video uploads.

**Example**:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  post 'api/panopto/upload', to: 'panopto#upload'
  # other routes...
end

# app/controllers/panopto_controller.rb
class PanoptoController < ApplicationController
  def upload
    response = RestClient.post('https://your.panopto.url/Panopto/api/v1/videos', {
      file: params[:file]
    }, { Authorization: "Bearer #{session[:panopto_access_token]}" })
    render json: { status: 'success', data: response.body }
  end
end
```

### 3. Fetch Video Metadata

**Task**: Fetch and Display Video Metadata

**File Location**: `app/controllers`

**Description**: Create a controller action to fetch video metadata.

**Example**:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  get 'api/panopto/metadata/:id', to: 'panopto#metadata'
  # other routes...
end

# app/controllers/panopto_controller.rb
class PanoptoController < ApplicationController
  def metadata
    response = RestClient.get("https://your.panopto.url/Panopto/api/v1/videos/#{params[:id]}", {
      Authorization: "Bearer #{session[:panopto_access_token]}"
    })
    render json: { status: 'success', data: JSON.parse(response.body) }
  end
end
```
