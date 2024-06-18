import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  @Output() confirm = new EventEmitter<void>();
  isActive = false;
  nombre = '';
  personas: number | null = null;

  constructor(private http: HttpClient) {}

  openModal() {
    this.isActive = true;
  }

  closeModal() {
    this.isActive = false;
  }

  onSubmit() {
    if (this.nombre && this.personas !== null) {
      const data = { nombre: this.nombre, personas: this.personas };
      this.http.post(`${environment.baseUrl}/confirmar-asistencia`, data)
        .subscribe(
          response => {
            console.log('Asistencia confirmada:', response);
            alert('¡Gracias por confirmar tu asistencia!'); // Mostrar mensaje de confirmación
            this.confirm.emit();
            this.closeModal();
          },
          error => {
            console.error('Error al confirmar asistencia:', error);
            alert('Hubo un error al confirmar tu asistencia. Por favor, intenta nuevamente.'); // Mostrar mensaje de error
          }
        );
    }
  }
}
