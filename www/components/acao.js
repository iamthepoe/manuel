function CadastrarUsuario($nome,$email,$senha,$dt_nacimento){
        $sql = 'INSERT INTO usuario(nome, email, senha,dt_nascimento) VALUES ("'.$nome.'",
        "'.$email.'","'.$senha.'","'.$dtnas.'")';
       
        $res = $GLOBALS['conn']->query($sql);
        if($res){
          echo "Usuário cadastrado com sucesso!";
        }else{
          echo "Erro ao cadastrar ADM";
        }
    }s