import React from 'react';

function TextWarning(){
    return(
        <div id='errorFive'><img class='union' src="./images/union_w.jpg"/>
            <ul class="list">
            <li>Длина пароля должна быть не менее 8 и не более 14 символов;</li>
                <li>Должна состоять из букв (строчные и заглавные) латинского алфавита (A-z);</li>
                    <li>Арабских цифр (0-9);</li>
                        <li> Одного из символов (!@#$%^&*)</li>
            </ul>

        </div>
    )
}

export default TextWarning;