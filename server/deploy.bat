@echo off

REM Configuration
set PROJECT_ID=sitewebprincipal
set SERVICE_NAME=apitherapy-service
set REGION=europe-west1
set IMAGE_NAME=apitherapy
set DOCKER_REPOSITORY=af10

REM Build the Docker image
echo Building Docker image...
docker build -t %IMAGE_NAME%:latest .

REM Tag for Google Container Registry
echo Tagging image for GCR...
docker tag %IMAGE_NAME%:latest %DOCKER_REPOSITORY%/%IMAGE_NAME%:latest


echo Pushing to AF10...
docker push %DOCKER_REPOSITORY%/%IMAGE_NAME%:latest


@REM echo Deploying to Cloud Run...
@REM gcloud run deploy %SERVICE_NAME% ^
@REM     --image %DOCKER_REPOSITORY%/%IMAGE_NAME%:latest ^
@REM     --platform managed ^
@REM     --region %REGION% ^
@REM     --allow-unauthenticated ^
@REM     --port 8080
@REM
@REM echo Deployment complete!
