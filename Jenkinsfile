pipeline {
    agent any

    parameters {
        choice(
    name: 'ENV',
    choices: ['dev', 'qa', 'prod'],
    description: 'Test environment'
     )

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
        string(
    name: 'TEST_TAG',
    defaultValue: '',
    description: 'Run specific tagged tests (@smoke, @regression)'
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
    script {
        def cmd = "npx playwright test"

        if (params.BROWSER) {
            cmd += " --project=${params.BROWSER}"
        }

        if (params.TEST_TAG?.trim()) {
            cmd += " --grep \"${params.TEST_TAG}\""
        }

        bat "set ENV=${params.ENV} && " + cmd
    }
}
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}