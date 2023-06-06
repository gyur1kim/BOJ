import sys;
input = sys.stdin.readline
n, k = map(int, input().split())

dp = [0 for i in range(k+1)]
dp[0] = 1

for _ in range(n):
    coin = int(input())
    for j in range(coin, k+1):
        dp[j] = dp[j] + dp[j-coin]

print(dp[k])