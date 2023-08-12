import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
if(sessionStorage.getItem('token')!=null) return true;
else{
  router.navigate(['/signin'],{
    queryParams:{returnUrl:state.url}
  })
  return false;
}
};
