jQuery(document).ready(function() {
    jQuery('.sb').hide()
})

var key = {
    'A':'25',
    'B':'24',
    'C':'23',
    'D':'22',
    'E':'21',
    'F':'20',
    'G':'19',
    'H':'18',
    'I':'17',
    'J':'16',
    'K':'15',
    'L':'14',
    'M':'13',
    'N':'12',
    'O':'11',
    'P':'10',
    'Q':'9',
    'R':'8',
    'S':'7',
    'T':'6',
    'U':'5',
    'V':'4',
    'W':'3',
    'X':'2',
    'Y':'1',
    'Z':'0',

    '0':'Z',
    '1':'Y',
    '2':'X',
    '3':'W',
    '4':'V',
    '5':'U',
    '6':'T',
    '7':'S',
    '8':'R',
    '9':'Q',

    ' ':'26',
}

function encrypt_message() {
    message = jQuery('#input_message').val()
    message = message.toUpperCase()
    length = message.length
    for (i = 0; i < length; i++) {
        char = message[i]
        if (char == 'A') {
            message = message.replaceAt(i, '0.')
        } else if (char == 'B') {
            message = message.replaceAt(i, '1.')
        } else if (char == 'C') {
            message = message.replaceAt(i, '2.')
        } else if (char == 'D') {
            message = message.replaceAt(i, '3.')
        } else if (char == 'E') {
            message = message.replaceAt(i, '4.')
        } else if (char == 'F') {
            message = message.replaceAt(i, '5.')
        } else if (char == 'G') {
            message = message.replaceAt(i, '6.')
        } else if (char == 'H') {
            message = message.replaceAt(i, '7.')
        } else if (char == 'I') {
            message = message.replaceAt(i, '8.')
        } else if (char == 'J') {
            message = message.replaceAt(i, '9.')
        } else if (char == 'K') {
            message = message.replaceAt(i, '10.')
            length = length + 1
            i = i + 1
        } else if (char == 'L') {
            message = message.replaceAt(i, '11.')
            length = length + 1
            i = i + 1
        } else if (char == 'M') {
            message = message.replaceAt(i, '12.')
            length = length + 1
            i = i + 1
        } else if (char == 'N') {
            message = message.replaceAt(i, '13.')
            length = length + 1
            i = i + 1
        } else if (char == 'O') {
            message = message.replaceAt(i, '14.')
            length = length + 1
            i = i + 1
        } else if (char == 'P') {
            message = message.replaceAt(i, '15.')
            length = length + 1
            i = i + 1
        } else if (char == 'Q') {
            message = message.replaceAt(i, '16.')
            length = length + 1
            i = i + 1
        } else if (char == 'R') {
            message = message.replaceAt(i, '17.')
            length = length + 1
            i = i + 1
        } else if (char == 'S') {
            message = message.replaceAt(i, '18.')
            length = length + 1
            i = i + 1
        } else if (char == 'T') {
            message = message.replaceAt(i, '19.')
            length = length + 1
            i = i + 1
        } else if (char == 'U') {
            message = message.replaceAt(i, '20.')
            length = length + 1
            i = i + 1
        } else if (char == 'V') {
            message = message.replaceAt(i, '21.')
            length = length + 1
            i = i + 1
        } else if (char == 'W') {
            message = message.replaceAt(i, '22.')
            length = length + 1
            i = i + 1
        } else if (char == 'X') {
            message = message.replaceAt(i, '23.')
            length = length + 1
            i = i + 1
        } else if (char == 'Y') {
            message = message.replaceAt(i, '24.')
            length = length + 1
            i = i + 1
        } else if (char == 'Z') {
            message = message.replaceAt(i, '25.')
            length = length + 1
            i = i + 1
        } else if (char == ' ') {
            message = message.replaceAt(i, '26.')
            length = length + 1
            i = i + 1
        } else if (char == '(') {
            message = message.replaceAt(i, '27.')
            length = length + 1
            i = i + 1
        } else if (char == ')') {
            message = message.replaceAt(i, '28.')
            length = length + 1
            i = i + 1
        } else if (char == ':') {
            message = message.replaceAt(i, '29.')
            length = length + 1
            i = i + 1
        } else if (char == '-') {
            message = message.replaceAt(i, '30.')
            length = length + 1
            i = i + 1
        } else if (char == '+') {
            message = message.replaceAt(i, '31.')
            length = length + 1
            i = i + 1
        } else if (char == '=') {
            message = message.replaceAt(i, '32.')
            length = length + 1
            i = i + 1
        } else if (char == ',') {
            message = message.replaceAt(i, '33.')
            length = length + 1
            i = i + 1
        } else if (char == '?') {
            message = message.replaceAt(i, '34.')
            length = length + 1
            i = i + 1
        } else if (char == '/') {
            message = message.replaceAt(i, '35.')
            length = length + 1
            i = i + 1
        } else if (char == '!') {
            message = message.replaceAt(i, '36.')
            length = length + 1
            i = i + 1
        } else if (char == '*') {
            message = message.replaceAt(i, '37.')
            length = length + 1
            i = i + 1
        } else if (char == '%') {
            message = message.replaceAt(i, '38.')
            length = length + 1
            i = i + 1
        } else if (char == '$') {
            message = message.replaceAt(i, '39.')
            length = length + 1
            i = i + 1
        } else if (char == '&') {
            message = message.replaceAt(i, '40.')
            length = length + 1
            i = i + 1
        } else if (char == '"') {
            message = message.replaceAt(i, '41.')
            length = length + 1
            i = i + 1
        } else if (char == "'") {
            message = message.replaceAt(i, '42.')
            length = length + 1
            i = i + 1
        } else if (char == '0') {
            message = message.replaceAt(i, 'A.')
        } else if (char == '1') {
            message = message.replaceAt(i, 'B.')
        } else if (char == '2') {
            message = message.replaceAt(i, 'C.')
        } else if (char == '3') {
            message = message.replaceAt(i, 'D.')
        } else if (char == '4') {
            message = message.replaceAt(i, 'E.')
        } else if (char == '5') {
            message = message.replaceAt(i, 'F.')
        } else if (char == '6') {
            message = message.replaceAt(i, 'G.')
        } else if (char == '7') {
            message = message.replaceAt(i, 'H.')
        } else if (char == '8') {
            message = message.replaceAt(i, 'I.')
        } else if (char == '9') {
            message = message.replaceAt(i, 'J.')
        } else if (char == '.') {
            length += 1
        }
    }
    jQuery('#output_message').val(message)
}

function decrypt_message() {
    code = jQuery('#input_message').val()
    if (code == 'Dhananya') {
        jQuery('.sb').show()
        jQuery('.btn').css('margin-top', '40px')
        jQuery('.btn').removeClass('col-sm-6')
        jQuery('.btn').removeClass('col-xs-6')
        jQuery('.btn').addClass('col-sm-4')
        jQuery('.btn').addClass('col-xs-4')
        clean()
    } else {
        codeChars = String(code).split('.')
    for (i = 0; i < codeChars.length - 1; i++) {
        char = codeChars[i]
        if (char == '0') {
            codeChars[i] = 'A'
        } else if (char == '1') {
            codeChars[i] = 'B'
        } else if (char == '2') {
            codeChars[i] = 'C'
        } else if (char == '3') {
            codeChars[i] = 'D'
        } else if (char == '4') {
            codeChars[i] = 'E'
        } else if (char == '5') {
            codeChars[i] = 'F'
        } else if (char == '6') {
            codeChars[i] = 'G'
        } else if (char == '7') {
            codeChars[i] = 'H'
        } else if (char == '8') {
            codeChars[i] = 'I'
        } else if (char == '9') {
            codeChars[i] = 'J'
        } else if (char == '10') {
            codeChars[i] = 'K'
        } else if (char == '11') {
            codeChars[i] = 'L'
        } else if (char == '12') {
            codeChars[i] = 'M'
        } else if (char == '13') {
            codeChars[i] = 'N'
        } else if (char == '14') {
            codeChars[i] = 'O'
        } else if (char == '15') {
            codeChars[i] = 'P'
        } else if (char == '16') {
            codeChars[i] = 'Q'
        } else if (char == '17') {
            codeChars[i] = 'R'
        } else if (char == '18') {
            codeChars[i] = 'S'
        } else if (char == '19') {
            codeChars[i] = 'T'
        } else if (char == '20') {
            codeChars[i] = 'U'
        } else if (char == '21') {
            codeChars[i] = 'V'
        } else if (char == '22') {
            codeChars[i] = 'W'
        } else if (char == '23') {
            codeChars[i] = 'X'
        } else if (char == '24') {
            codeChars[i] = 'Y'
        } else if (char == '25') {
            codeChars[i] = 'Z'
        } else if (char == '26') {
            codeChars[i] = ' '
        } else if (char == 'B') {
            codeChars[i] = '1'
        } else if (char == 'C') {
            codeChars[i] = '2'
        } else if (char == 'D') {
            codeChars[i] = '3'
        } else if (char == 'E') {
            codeChars[i] = '4'
        } else if (char == 'F') {
            codeChars[i] = '5'
        } else if (char == 'G') {
            codeChars[i] = '6'
        } else if (char == 'H') {
            codeChars[i] = '7'
        } else if (char == 'I') {
            codeChars[i] = '8'
        } else if (char == 'J') {
            codeChars[i] = '9'
        } else if (char == 'A') {
            codeChars[i] = '0'
        } else if (char == '27') {
            codeChars[i] = '('
        } else if (char == '28') {
            codeChars[i] = ')'
        } else if (char == '29') {
            codeChars[i] = ':'
        } else if (char == '30') {
            codeChars[i] = '-'
        } else if (char == '31') {
            codeChars[i] = '+'
        } else if (char == '32') {
            codeChars[i] = '='
        } else if (char == '33') {
            codeChars[i] = ','
        } else if (char == '34') {
            codeChars[i] = '?'
        } else if (char == '35') {
            codeChars[i] = '/'
        } else if (char == '36') {
            codeChars[i] = '!'
        } else if (char == '37') {
            codeChars[i] = '*'
        } else if (char == '38') {
            codeChars[i] = '%'
        } else if (char == '39') {
            codeChars[i] = '$'
        } else if (char == '40') {
            codeChars[i] = '&'
        } else if (char == '41') {
            codeChars[i] = '"'
        } else if (char == '42') {
            codeChars[i] = "'"
        }
    }
    code = String(codeChars)
    while(code.includes(',')) {
        code = code.replace(',', '')
    }
    jQuery('#output_message').val(code)
    }
}

function clean() {
    jQuery('#output_message').val('')
    jQuery('#input_message').val('')
}

function copy() {
    document.getElementById('output_message').disabled = false
    jQuery('#output_message').select()
    document.execCommand('copy')
    document.getElementById('output_message').disabled = true
}

function change() {
    message = jQuery('#input_message').val()
    message = message.toUpperCase()
    message = message.split('')
    for (i = 0; i < message.length; i++) {
        char = message[i]
        var char = key[char]
        if (char == undefined) {
            char = message[i]
        } else {
            if (Number(char) != NaN) {
                char = (char * 10) - 2
            }
        }
        message[i] = char
    }
    message = String(message)
    while (message.includes(',')) {
        message = String(message).replace(',', '.')
    }
    jQuery('#output_message').val(message)
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + 1, this.length + 1)
}