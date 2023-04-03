import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['',Validators.required],
      cpf: ['',Validators.required],
      email: ['',Validators.required],
      senha: ['',Validators.required],
      senhaConfirmacao: ['',Validators.required]
    });
  }


  adicionarUsuario() {
    this.usuario = Object.assign({},this.usuario,this.cadastroForm.value);
    console.log(this.usuario);
  }
}
