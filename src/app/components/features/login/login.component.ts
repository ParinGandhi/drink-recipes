import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Constants } from 'src/app/constants/constants';
import { User } from 'src/app/models/User.model';
import { CommonUtilitiesService } from 'src/app/services/common-utilities.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  tabSelection: string = 'login';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  passwordMatch: string = '';
  user: User = new User();

  supaBase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  constructor(private commonUtils: CommonUtilitiesService, private router: Router) {}

  ngOnInit(): void {}

  signUp = async () => {
    const resp = await this.supaBase.auth.signUp({
      email: this.email,
      password: this.password,
    });
    console.log(resp);
    this.addUser(resp);
  };

  addUser = async (resp: any) => {
    const { error } = await this.supaBase.from('registered_users').insert({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      fk_user_uid: resp.user.id,
    });
  };

  login = async () => {
    const resp = await this.supaBase.auth.signIn({
      email: this.email,
      password: this.password,
    });
    console.log('Login response:', resp);
    this.getUserInfo(resp?.user?.id);
  };

  getUserInfo = async (userUid: string | undefined) => {
    if (userUid) {
      const { data, error } = await this.supaBase
        .from('registered_users')
        .select('*')
        .eq('fk_user_uid', userUid);
      console.log(data);
      window.sessionStorage.setItem("userInfo", JSON.stringify(data))
      if (data && data.length > 0) {
        this.user = data[0];
        this.commonUtils.setToastr(Constants.TOASTR_TYPE.SUCCESS, `Successfully logged in as ${this.user.first_name} ${this.user.last_name}`, 'Login');
        this.router.navigate(['/recipes'])
      }
    }
  };

  changeTab(selection: string) {
    const loginTab = document.getElementById('login');
    const signUpTab = document.getElementById('signUp');
    this.tabSelection = selection;

    if (selection === 'login') {
      loginTab?.classList.add('active');
      signUpTab?.classList.remove('active');
    } else {
      signUpTab?.classList.add('active');
      loginTab?.classList.remove('active');
    }
  }
}
