import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageUrlLogo = '../../assets/images/logo.png';
  imageUrlPerfil = '../../assets/images/perfil.svg'
  imageUrlSair = '../../assets/images/sair.svg'
}
