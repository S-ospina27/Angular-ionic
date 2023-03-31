import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';

import { AddEmployesModel } from '../models/AddEmployesModel';
@Component({
  selector: 'app-add-employes',
  templateUrl: './add-employes.page.html',
  styleUrls: ['./add-employes.page.scss'],
})
export class AddEmployesPage implements OnInit {
  addEmployesModel = {} as AddEmployesModel;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async registerEmployes(addEmployesModel: AddEmployesModel) {
    console.log('entro'+addEmployesModel.title)
    console.log('entro'+addEmployesModel.area)
    console.log('entro'+addEmployesModel.experience)
    console.log('entro'+addEmployesModel.schedule)
    if (this.formValidation()) {
      const loader = await this.loadingCtrl.create({
        message: 'Registrando...',
      });
      await loader.present();

      try {
        await this.firestore.collection("posts").add(addEmployesModel); 
        this.navCtrl.navigateRoot('home'); 
      } catch (e: any) {
        e.message = 'Error al registrar la oferta';
        const ErrorMessage = e.message;
        this.showToast(ErrorMessage);
      }
      await loader.dismiss();
   }
  }

  formValidation() {
    if (this.addEmployesModel.title === undefined) {
      this.showToast("Ingrese un titulo");
      return false;
    }

    if (this.addEmployesModel.area === undefined) {
      this.showToast("Ingrese una area");
      return false;
    }
    if (this.addEmployesModel.experience === undefined) {
      this.showToast("Ingrese experiencia");
      return false;
    }
    if (this.addEmployesModel.schedule === undefined) {
      this.showToast("Ingrese hoario");
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
