import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  rooms:Room = {
    totalRooms: 20,
    availableRooms:10,
    bookedRooms:5

  }

  roomList:RoomList = {
    roomType: 'Deluxe Room',
    amenities:'',
    price: 0,
    photos:'',
    checkInTime: new Date('12- Oct-2022'),
    checkOutTime: new Date('14-Oct-2022')

  }

  

}
