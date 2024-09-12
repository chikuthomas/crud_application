pipeline {
    agent any
    
    stages {
        stage('Use SSH') {
            steps {
                script {
                    try {
                        echo 'Attempting to run SSH command...'
                        bat '''
                            ssh -i "C:\\users\\cthomas\\.ssh\\id_rsa" ictadmin@10.140.240.51 "ls"
                        '''
                        echo 'SSH command executed successfully!'
                    } catch (Exception e) {
                        echo 'SSH command failed!'
                        error "Failed to run SSH command: ${e.getMessage()}"
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
