import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { User } from '../models/UserModel';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async register(user: User) {
  
    if (this.formValidation()) {
      const loader = await this.loadingCtrl.create({
        message: 'Registrando...',
      });
      await loader.present();

      try {
        await this.afAuth
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((data) => {
            this.navCtrl.navigateRoot('tips-employes');
          });
      } catch (e: any) {
        e.message = 'Error al registrarse';
        const ErrorMessage = e.message;
        this.showToast(ErrorMessage);
      }
      await loader.dismiss();
    }
  }

  formValidation() {
    const expReg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!expReg.test(this.user.email)) {
      this.showToast(' correo incorrecto');
      return false;
    }
    if (this.user.password.length <= 6) {
      this.showToast('Ingrese password');
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 4000,
      })
      .then((toastData) => toastData.present());
  }
}
