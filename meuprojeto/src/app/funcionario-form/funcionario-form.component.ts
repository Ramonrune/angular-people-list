import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 0;
  nome = 'Ramon';
  adicionado = false;
  // tslint:disable-next-line:no-output-rename
  @Output('criado') funcionarioAdicionado = new EventEmitter();

  adicionar() {
     this.adicionado = true;
     this.ultimoId++;
     const funcionario = {
       id: this.ultimoId,
       nome : this.nome
      };

      this.funcionarioAdicionado .emit(funcionario);

  }

}
