pipeline {
    agent any
    stages {
        stage('Deploy to Netlify') {
            steps {
                sh 'npm install netlify-cli -g'
                sh 'netlify deploy --prod --dir public'
            }
        }
    }
}
