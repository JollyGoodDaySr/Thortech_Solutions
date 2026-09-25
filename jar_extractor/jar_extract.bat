@ECHO OFF
FOR %%i IN (*.jar) DO (
    IF NOT EXIST "%%~ni" mkdir "%%~ni"
    tar -xf "%%i" -C "%%~ni"
)
PAUSE
