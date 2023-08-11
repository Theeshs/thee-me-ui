def stringChallange(str):
    swapped_case = ""
    prev_num = None

    for char in str:
        if char.isalpha():
            swapped_case += char.swapcase()
        elif char.isdigit():
            if prev_num is not None:
                swapped_case += char + prev_num
                prev_num = None
            else:
                prev_num = char
        else:
            swapped_case += char

    if prev_num is not None:
        swapped_case += prev_num

    return swapped_case

# Test the function
input_str = "6Hello4-8World, 7 yes3"
output_str = stringChallange(input_str)
print(output_str)