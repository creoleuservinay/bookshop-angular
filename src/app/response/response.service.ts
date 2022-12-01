import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResponseParam } from '../types/responseparam';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private toastr: ToastrService,) { }
  showSuccess(response: ResponseParam) {
    this.toastr.success(response.message, response.status, {
      progressBar: true,
      timeOut: 2000 
    });
  }
  showError(response: ResponseParam) {
    this.toastr.error(response.message, response.status, {
      progressBar: true,
      timeOut: 2000
    });
  }
}
