print('안녕')

import sys
input = sys.stdin.readline

s = set()
T = int(input())
for tc in range(T) :
    line = input().split()
    if line[0] == "add":
        s.add(int(line[1]))
    elif line[0] == "remove":
        s.discard(int(line[1]))
    elif line[0] == "check":
        if int(line[1]) in s:
            print(1)
        else:
            print(0)
    elif line[0] == "toggle":
        if int(line[1]) in s:
            s.discard(int(line[1]))
        else:
            s.add(int(line[1]))
    elif line[0] == "all":
        for i in range(1, 21):
            s.add(i)
    elif line[0] == "empty":
        s.clear()

