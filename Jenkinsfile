pipeline {
    agent any

    parameters {

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select browser for Playwright tests'
        )

        booleanParam(
            name: 'INSTALL_BROWSERS',
            defaultValue: true,
            description: 'Install Playwright browsers before running tests'
        )

        booleanParam(
            name: 'RUN_TESTS',
            defaultValue: true,
            description: 'Run Playwright tests'
        )
    }

    environment {
        CI = 'true'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/datttacheke/PlayWrightDatta.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            when {
                expression { params.INSTALL_BROWSERS == true }
            }
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            when {
                expression { params.RUN_TESTS == true }
            }
            steps {
                bat "npx playwright test --project=${params.BROWSER}"
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}