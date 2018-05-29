def reverse(input=''):
    tmp_str = ''
    for i in range(len(input) - 1, -1, -1):
        tmp_str += input[i]
    return tmp_str
