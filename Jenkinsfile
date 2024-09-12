pipeline {
    agent any

    stages {
        stage('Use SSH with Credentials') {
            steps {
                script {
                    echo 'Attempting to run SSH command...'

                    def remote = [
                        name: 'remote-server',
                        host: '10.140.240.51',
                        user: 'ictadmin',
                        credentialsId: 'ssh-ictadmin', // Use the ID of your Jenkins credentials
                        port: 22,
                        allowAnyHosts: true
                    ]

                    // Run a command on the remote server using credentials
                    sshCommand remote: remote, command: 'ls'

                    echo 'SSH command executed successfully!'
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
