# Insertion Sort

Using the the input array `[8,4,23,42,16,15]`, we will be going through the pseudo code below showing the output at each step.

```JavaScript
{
     InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
}
```

### pass1: 
First we start with  (i= 1) and j=0, `temp=arr[1]=4`, and compare 'temp'  with the value in `arr[j]=8`.
`[4,8,23,42,16,15]

### pass2:
Move forward to (i=2) and j=1. temp=23, temp is larger than the value at `arr[j]`, we immediately break out of the while loop.
The temp is now set in  arr[j + 1] and the output is array [4,8,23,42,16,15].

### pass3:
Move forward to i=3 j=2. Set the temp to the value at `arr[3]= 42`.
like with step two, temp is larger than the value at `arr[2]` so we immediately break out of the while loop.
The temp is now set in the position arr[j + 1] and the output is array [4,8,23,42,16,15]

### pass4:
Move forward to i=4 and j=3. temp=16.
This time, we move through our while loop twice to move the element to the left 2 indices.
Once the while statement conditions fail, the temp will be set in the position [j + 1] and the output is array [4,8,16,23,42,15].

### pass5:
Move forward to i=5 and j=4. temp=15.
Move through our while loop 3 times to move the element to the left 3 indices.
Once the while statement conditions fail, the temp will be set in the position [j + 1] and the final output is the sorted array [4,8,23,42,16,15]

