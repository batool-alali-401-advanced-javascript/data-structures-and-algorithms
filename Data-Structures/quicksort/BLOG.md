# Merge Sort

Using the the input array `[8,4,23,42,16,15]`, we will be going through the pseudo code below showing the output at each step.

```JavaScript
{
   ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
}
```

# Step1:
Set last element as the pivot `[15]`. Compare 8 and 4 and swap their positions, 8 and 4 were in the indexes 0 and 1.
then move forward with our comparisons and find the rest of the elements to be larger than the pivot. When we reach the end of the array, we swap the pivot with the lowest unsorted index.
the array becomes `[8,4,15,42,16,23]`.

# Step2:
Partitions the two arrays, [8, 4] and [42, 16, 23]. We call quicksort on both arrays and go through the same process. In the first array we swap 8 and 4. In the second array since 42 is larger we move forward and compare 16 and 23. Since 16 is smaller we swap their positions with (42) and then reach the end of the array and swap the pivot with 42.
the array becomes `[4,8,15,16,23,42]`.

# Step3:
Now the Partitions is, `[16,42]`, 16 is smaller then 42 so swap 42 with the pivot,
no the array has one element after partition, `[16]` and the pivot is 42, the pivot is larger so we will not swap
the array will be `[4,8,15,16,23,42]`.

