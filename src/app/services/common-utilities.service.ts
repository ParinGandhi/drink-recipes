import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilitiesService {

  toastrOptions = {
    closeButton: true,
    positionClass: 'toast-bottom-center'
  }

  constructor(private toastr: ToastrService) { }



  setToastr(toastrType: string, message: string, title: string) {
    switch(toastrType) {
      case Constants.TOASTR_TYPE.SUCCESS:
        this.toastr.success(message, title, this.toastrOptions);
        break;
        case Constants.TOASTR_TYPE.INFO:
          this.toastr.info(message, title, this.toastrOptions);
          break;
          case Constants.TOASTR_TYPE.WARNING:
            this.toastr.warning(message, title, this.toastrOptions);
            break;
            case Constants.TOASTR_TYPE.ERROR:
              this.toastr.error(message, title, this.toastrOptions);
              break;
              default:
                break;
    }
    
  }
}
