let K = `10`.map(Number);


/*
 * A => B   (A 개수가 줄고 B 개수 증가)
 * B => BA  (A 개수가 증가 B 개수 유지)
 * 로 변화하는 규칙이 있다.
 * 1일 : A     1 0
 * 2일 : BA    0 1
 * 3일 : BA B
 * 4일 : BA B BA
 * 5일 : BA B BA BA B
 * 6일 : BA B BA BA B B BA B BA
 * ....
 */