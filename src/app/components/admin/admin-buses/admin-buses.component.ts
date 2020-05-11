import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { Route_1, Route_2 } from '../admin-json_data/coordinates.component';
import { DataService } from '../../../shared/services/data.services';
import { IAPIResponse1 } from '../../../shared/interfaces/api-response.interface';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-admin-buses',
  templateUrl: './admin-buses.component.html',
  styleUrls: ['./admin-buses.component.scss']
})
export class AdminBusesComponent implements OnInit {
  buses_loading: boolean  = true;
  is_addingBus: boolean = false;
  is_addingDriver: boolean = false;
  is_deleting_driverOrBus: boolean = false;
  buses_data: Array<any> = [];
  drivers_data: Array<any> = [];
  coord = { lat: -26.18359, long: 27.9976812 };
  zoom: number = 14;
  busIcon = {
      url: '../../../assets/img/bus_location.png',
      scaledSize: { height: 60, width: 60 }
  };
  lat_1: number = Route_1[0].lat;
  lng_1: number = Route_1[0].long;
  lat_2: number = Route_2[0].lat;
  lng_2: number =  Route_2[0].long;
  routeTimer_1;
  routeTimer_2;
  show_addBus_modalActions = new EventEmitter<string|MaterializeAction>();
  show_addDriver_modalActions = new EventEmitter<string|MaterializeAction>();
  delete_driver_modalActions = new EventEmitter<string|MaterializeAction>();
  delete_bus_modalActions = new EventEmitter<string|MaterializeAction>();
  deleted_bus;
  deleted_driver;
  add_bus = {
    'bus_no': '',
    'bus_mark': '',
    'bus_model': '',
    'bus_noseat': '',
  };
  add_driver = {
    'driver_fname': '',
    'driver_lname': '',
    'driver_email': '',
    'driver_cellno': '',
  };
  @ViewChild('Gender') new_admin_gender;

  constructor(
      private data_service: DataService,
      private session_storage: SectionStorageService ) { }

  ngOnInit() {
      this.routeTimer_1 = IntervalObservable.create(1600);
      this.routeTimer_2 = IntervalObservable.create(1000);
      this.processBusRoute();
      this.fetch_busesData();
  }

// <editor-fold description="Fetch page data">
    fetch_busesData() {
        this.data_service.dataGet(`admin/get-driver-and-bus`)
        .subscribe((response) => {
            if (response.req === 'found') {
                this.updateCurrentData(response.data);
            }else {
                console.error(response);
                toast('An Error happened, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            this.buses_loading = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.buses_loading = false; });
    }
// </editor-fold>

// <editor-fold Description="Add New Bus Modal">
    openAddBusModal() {
      this.show_addBus_modalActions.emit({action: 'modal' , params: ['open']});
    }
    addNewBus( bus ) {
        if (bus.bus_no && bus.bus_mark && bus.bus_model && bus.bus_noseat) {
            this.is_addingBus = true;
            this.data_service.dataGet(`admin/add-bus`, bus)
            .subscribe( (response: IAPIResponse1) => {
                if (response.req === 'found') {
                    this.updateCurrentData(response.data);
                    toast(`The bus ${bus.bus_no} was added with success`, 4000, 'rounded');
                    this.show_addBus_modalActions.emit({action: 'modal' , params: ['close']});
                }else {
                    console.error(response);
                    toast('An Error happened, please contact the dev admin', 4000);
                }
            },
            (err: any) => {
                this.is_addingBus = false;
                console.log(err);
                toast('An Error happened, please contact the dev admin', 4000);
            },
            () => { this.is_addingBus = false; });
        }else {
            toast('Please make sure all required fields are valid', 4000);
        }
    }
// </editor-fold>
// <editor-fold Description="Delete Bus Modal">
    openDeleteBusModal( bus ) {
        this.delete_bus_modalActions.emit({action: 'modal' , params: ['open']});
        this.deleted_bus = bus;
    }
    deleteBusData() {
        this.is_deleting_driverOrBus = true;
        const data_sent = {'bus_id': this.deleted_bus.bus_id} ;
        this.data_service.dataGet(`admin/delete-bus`, data_sent)
        .subscribe( (response: IAPIResponse1) => {
            if (response.req === 'found') {
                this.updateCurrentData(response.data);
                toast(`The bus ${this.deleted_bus.bus_no} was deleted with success`, 4000, 'rounded');
                this.delete_bus_modalActions.emit({action: 'modal' , params: ['close']});
            }else {
                console.error(response);
                toast('An Error happened, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            this.is_deleting_driverOrBus = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.is_deleting_driverOrBus = false; });
    }
// </editor-fold>

// <editor-fold Description="Add New Driver Modal">
    openAddDriversModal() {
      this.show_addDriver_modalActions.emit({action: 'modal' , params: ['open']});
    }
    addNewDriver( driver ) {
        if (driver.driver_fname && driver.driver_lname && driver.driver_email && driver.driver_cellno) {
            this.is_addingDriver = true;
            const gender = this.new_admin_gender.nativeElement.value;
            const data_sent = {
                'fname': driver.driver_fname,
                'lname': driver.driver_lname,
                'email': driver.driver_email,
                'cellNo': driver.driver_cellno,
                'gender': gender,
                'pwd': driver.driver_cellno
            };
            this.data_service.dataGet(`admin/add-driver`, data_sent)
            .subscribe( (response: IAPIResponse1) => {
                    if (response.req === 'found') {
                        this.updateCurrentData(response.data);
                        toast(`The driver ${driver.driver_fname} was added with success`, 4000, 'rounded');
                        this.show_addDriver_modalActions.emit({action: 'modal' , params: ['close']});
                    }else {
                        console.error(response);
                        toast('An Error happened, please contact the dev admin', 4000);
                    }
                },
                (err: any) => {
                    this.is_addingDriver = false;
                    console.log(err);
                    toast('An Error happened, please contact the dev admin', 4000);
                },
                () => { this.is_addingDriver = false; });
        }else {
            toast('Please make sure all required fields are valid', 4000);
        }
    }
// </editor-fold>
// <editor-fold Description="Delete Driver Modal">
    openDeleteDriverModal( driver ) {
      this.show_addDriver_modalActions.emit({action: 'modal' , params: ['open']});
      this.deleted_driver = driver;
    }
    deleteDriverData( ) {
        this.is_deleting_driverOrBus = true;
        const data_sent = {'driver_no': this.deleted_driver.driver_no} ;
        this.data_service.dataGet(`admin/delete-driver`, data_sent)
        .subscribe( (response: IAPIResponse1) => {
            if (response.req === 'found') {
                this.updateCurrentData(response.data);
                toast(`The Driver ${this.deleted_driver.driver_fname} was deleted with success`, 4000, 'rounded');
                this.show_addDriver_modalActions.emit({action: 'modal' , params: ['close']});
            }else {
                console.error(response);
                toast('An Error happened, please contact the dev admin', 4000);
                this.is_deleting_driverOrBus = false;
            }
        },
        (err: any) => {
            this.is_deleting_driverOrBus = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.is_deleting_driverOrBus = false; });
    }
// </editor-fold>

// <editor-fold Description="Update Page Data">
    updateCurrentData(data) {
      this.buses_data = data.bus;
      this.drivers_data = data.driver;
      // console.log(data);
    }
// </editor-fold>

// <editor-fold Description="Process Routes">
    processBusRoute() {
        const route1_length = Route_1.length;
        const route2_length = Route_2.length;
        let index_1 = 0, index_2 = 0;
        this.routeTimer_1.subscribe( n => {
            if (index_1 === route1_length) {
                this.lat_1 = Route_1[0].lat;
                this.lng_1 = Route_1[0].long;
                index_1 = 0;
            }else {
                this.lat_1 = Route_1[index_1].lat;
                this.lng_1 = Route_1[index_1].long;
            }
            index_1++;
        });
        this.routeTimer_2.subscribe(n => {
            if (index_2 === route2_length) {
                index_2 = 0;
                this.lat_2 = Route_2[0].lat;
                this.lng_2 =  Route_2[0].long;
            }else {
                this.lat_2 = Route_2[index_2].lat;
                this.lng_2 =  Route_2[index_2].long;
            }
            index_2++;
        });
    }
// </editor-fold>
}
