
pipeline {
    // 'agent any' diz ao Jenkins para correr este pipeline em qualquer ambiente disponível
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'A descarregar o código do GitHub...'
                // A instrução 'checkout scm' puxa automaticamente o código do repositório
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'A preparar e compilar a aplicação...'
                // Num projeto real, aqui colocarias comandos como 'docker build' ou 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'A executar os testes de qualidade e segurança (DevSecOps)...'
                // Aqui executarias scripts de teste automatizados
            }
        }
        stage('Deploy') {
            steps {
                echo 'A implementar a aplicação com sucesso!'
                // Aqui colocarias os comandos para enviar a app para um servidor ou cluster Kubernetes
            }
        }
    }
}

