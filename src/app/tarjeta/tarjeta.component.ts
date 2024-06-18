import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css', './jquery.countdown.css']
})
export class TarjetaComponent implements OnInit{

  @ViewChild('backgroundVideo', { read: ElementRef }) backgroundVideo: ElementRef;
  @ViewChild('backgroundImage', { read: ElementRef }) backgroundImage: ElementRef;

  isNavbarActive: boolean = false;

  idTarjeta: string;
  days: number=0;
  hours: number=0;
  minutes: number=0;
  seconds: number=0;

  constructor(private route: ActivatedRoute) {

    console.log('contructor');

  }


  @ViewChild(ConfirmModalComponent) confirmModal: ConfirmModalComponent;

  openConfirmModal() {
    this.confirmModal.openModal();
  }

  handleConfirm() {
    alert('Asistencia confirmada. ¡Gracias!');
  }


  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  ngOnInit(): void {
    this.initializeCountdown();
    console.log('entraaa');


    this.route.paramMap.subscribe(params => {
      console.log(params);

      this.idTarjeta = params.get('idTarjeta');
      console.log(this.idTarjeta);  // Aquí puedes usar el valor del parámetro como necesites
    });

  }





  traerTarjeta(){

  }




  ngAfterViewInit() {
    // Obtener el elemento nativo del video y la imagen
    const video: HTMLVideoElement = this.backgroundVideo.nativeElement;
    const image: HTMLImageElement = this.backgroundImage.nativeElement;

    // Escuchar el evento 'ended' del video
    video.addEventListener('ended', () => {
      // Ocultar el video
      video.style.display = 'none';
      // Mostrar la imagen
      image.style.display = 'block';
    });
  }




  initializeCountdown() {
    const eventDate = new Date('2024-07-13T15:30:00').getTime();

    interval(1000).subscribe(() => {
      const currentDate = new Date().getTime();
      const distance = eventDate - currentDate;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    });
  }





}



