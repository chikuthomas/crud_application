pipeline {
    agent any
    
    environment {
        SSH_KEY = credentials('ssh-ictadmin') // Jenkins Credentials ID for the SSH Key
    }

    stages {
        stage('Use SSH') {
            steps {
                script {
                    sshagent([${ SSH_KEY]) {
                        bat '''
                            ssh ictadmin@10.140.240.51 "ls"
                        '''
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for more details.'
        }
    }
}
