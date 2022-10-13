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

  roomList:RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities:'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 500,
      photos:'https://unsplash.com/photos/p3UWyaujtQo',
      checkInTime: new Date('12- Oct-2022'),
      checkOutTime: new Date('14-Oct-2022')
    },

    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities:'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 5000,
      photos:'https://unsplash.com/photos/p3UWyaujtQo',
      checkInTime: new Date('12- Oct-2022'),
      checkOutTime: new Date('14-Oct-2022')

    },

    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities:'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:'https://unsplash.com/photos/p3UWyaujtQo',
      checkInTime: new Date('12- Oct-2022'),
      checkOutTime: new Date('14-Oct-2022')
    }

  ]

  

}
