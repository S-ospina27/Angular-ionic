import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.handleGetInfo();
  }

  async handleGetInfo() {
    const loader = await this.loadingCtrl.create({
      message: 'Registrando...',
    });
    await loader.present();

    try {
      this.firestore
        .collection('posts')
        .snapshotChanges()
        .subscribe((data: any[]) => {
          this.posts = data.map((e: any) => {
            return {
              id: e.payload.doc.id,
              title: e.payload.doc.data()['title'],
              area: e.payload.doc.data()['area'],
              experience: e.payload.doc.data()['experience'],
              schedule: e.payload.doc.data()['schedule'],
            };
          });
        });
      await loader.dismiss();
    } catch (e: any) {
      e.message = 'Error al registrar la oferta';
      const ErrorMessage = e.message || e.getLocalizedMessage();
      this.showToast(ErrorMessage);
    }
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
