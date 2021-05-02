const error = {
    INVALID_PASSWORD: 'Пароль не верный ',
    EMAIL_NOT_FOUND: 'Такого email нет в системе',
    auth: 'Пожайлуста ввойдите в систему',
    EMAIL_EXISTS: 'Адрес электронной почты уже используется',
    OPERATION_NOT_ALLOWED: 'Пароль для входа в этот проект отключен', 
    TOO_MANY_ATTEMPTS_TRY_LATER: 'Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.',
    EMAIL_NOT_FOUND: 'Пользовательской записи с таким email , нет!!'
    }
    
    export function err(code){
        return error[code]
    }