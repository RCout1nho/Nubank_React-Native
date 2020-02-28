# Resultado do projeto
## Tela primária
![](/Readme-images/Tela-1.png)

# Tela secundária
![](/Readme-images/Tela-2.png)

## Este projeto utiliza efeitos de animação

# Instalar React Native
Siga os passos [desse tutorial](https://docs.rocketseat.dev/ambiente-react-native/introducao) para fazer a instalação correta.

# Criando o projeto
Para esse projeto, é utilizado o template fornecido pela RocketSeat®, cuja documentação é encontrada [aqui](https://github.com/Rocketseat/react-native-template-rocketseat-basic).

### Iniciar o projeto
```react-native init <nome-do-projeto> --template rocketseat-basic```

## Instalar dependências
- react-native-svg (Necessáira para utilização de _react-native-qrcode-svg_)

    ```yarn add react-native-svg```

- [react-native-qrcode-svg](https://www.npmjs.com/package/react-native-qrcode-svg)

    ```yarn add react-native-qrcode-svg```
    
    ```react-native link react-native-qrcode-svg```

    Pare a execução do ```react-native start``` e reinstale o programa no emulador com:

    ```react-native run-android```


- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

    ```yarn add react-native-vector-icons```

- [react-navigation](https://reactnavigation.org/docs/getting-started/)

    ```yarn add react-natigation```

- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)

    ```yarn add react-gesture-handler```

## Configurando um emulador
Para executar o programa em um emulador, basta iniciar o emulador, e seguir os seguintes passos no seu terminal:

- Entrar na pasta do projeto criado.
- Para executar em um emulador Android: ```react-native run-android```
- Para executar em um emulador Ios: ```react-native run-ios``` (Caso apresente algum erro, acesse a [documentação](https://reactnative.dev/docs/getting-started) do react native)

## Executando o projeto no emulador
Dentro da pasta do projeto execute o seguinte comando no terminal:

```react-native start```

Se você estiver usando uma distribuição Linux e esse comando retornar algum tipo de erro na execução, utilize:

```sudo react-native start```