@ECHO OFF
FOR %%i IN (*.jar) DO (
    IF NOT EXIST "%%~ni" (
        ECHO Creating directory "%%~ni"...
        mkdir "%%~ni"
    )
    ECHO Extracting "%%i" into "%%~ni"...
    tar -xf "%%i" -C "%%~ni"
)
ECHO Done!
