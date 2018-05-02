import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Deed } from '../models/Deed';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeedService {
  deedsCollection: AngularFirestoreCollection<Deed>;
  deeds: Observable<Deed[]>;
  deedDoc: AngularFirestoreDocument<Deed>;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
    this.deedsCollection = this.db.collection('deeds');

    this.deeds = this.deedsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Deed;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAllDeeds(): Observable<Deed[]> {
    return this.deeds;
  }

  addDeed(deed: Deed) {
    this.deedsCollection.add(deed);
  }

  deleteDeed(deed: Deed) {
    console.log('hitting deed service');
    this.deedDoc = this.db.doc(`deeds/${deed.id}`);
    console.log('this deed doc...', this.deedDoc);
    this.deedDoc.delete();
  }
}
