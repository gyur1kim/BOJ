import sys
input = sys.stdin.readline

# s = set()
# T = int(input())
# for tc in range(T) :
#     line = input().split()
#     if line[0] == "add":
#         s.add(int(line[1]))
#     elif line[0] == "remove":
#         s.discard(int(line[1]))
#     elif line[0] == "check":
#         if int(line[1]) in s:
#             print(1)
#         else:
#             print(0)
#     elif line[0] == "toggle":
#         if int(line[1]) in s:
#             s.discard(int(line[1]))
#         else:
#             s.add(int(line[1]))
#     elif line[0] == "all":
#         for i in range(1, 21):
#             s.add(i)
#     elif line[0] == "empty":
#         s.clear()

# 문제 속도가 빠른 사람의 풀이
s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for _ in range(int(input())):
    l = input().split()
    if l[0] == "add":
        s[int(l[1])] = 1
    elif l[0] == "remove":
        s[int(l[1])] = 0
    elif l[0] == "check":
        sys.stdout.write('1\n' if s[int(l[1])] else '0\n')
    elif l[0] == "toggle":
        s[int(l[1])] = 1 - s[int(l[1])]
    elif l[0] == "all":
        s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    elif l[0] == "empty":
        s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

