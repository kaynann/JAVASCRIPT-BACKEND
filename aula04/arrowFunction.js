function aluno(nomeALuno, idadeAluno, notaAluno) {
  this.nomeALuno = nomeALuno;
  this.idadeAluno = idadeAluno;
  this.notaAluno = notaAluno;

  this.dadosAnonimos = function () {
    setTimeout(function () {
      console.log(this.nomeALuno);
      this.notaAluno = (this.notaAluno * 3) / 3;    
    }, 3000);
  };

  // arrow function -  são funções de escopo aberto, seguem hierarquia. 
  this.dadosArrow = function () {
    setTimeout(() => {
      console.log(this.nomeALuno);
      console.log(aluno01.idadeAluno);
      console.log(aluno01.notaAluno);   
    }, 4000);
  };
};

const aluno01 = new aluno('Kaynan', 19, 7);
aluno01.dadosAnonimos();
aluno01.dadosArrow();