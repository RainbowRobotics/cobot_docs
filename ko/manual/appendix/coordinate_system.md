---
layout: doc
outline: deep
---

# 좌표계 설정

![missing](/manual/common/appendix/f/1.png)

### Global 좌표계

로봇의 베이스에 고정된 좌표계로, 로봇이 한번 고정되면 Global 좌표계 또한 고정됩니다.<br>
베이스 기저면의 중심을 원점으로 하며, 원점에서 로봇 방향을 +Z방향, 원점에서 커넥터 방향을 +Y방향으로 정합니다.

### Local 좌표계

로봇의 TCP(Tool Center Point)에 고정된 좌표계로서 TCP의 오프셋을 설정하거나 이동함에 따라 실시간으로 축의 방향이 바뀝니다.<br>
TCP를 원점으로 하며, 원점에서 로봇방향을 +Y방향, 원점에서 직접 교시 버튼 방향을 +Z방향으로 정합니다.
