var N=null,E="",T="t",U="u",searchIndex={};
var R=["usize","allocerror","from_raw_parts","as_slice","as_mut_slice","Returns a pair of slices, where the first slice contains…","result","Moves the deque head by `x`.","Moves the deque tail by `x`.","isize","option","Shortens the deque by removing excess elements from the…","Removes all but the first of consecutive elements in the…","to_owned","clone_into","try_from","try_into","borrow_mut","into_iter","type_id","borrow","typeid","size_hint","next_back","intoiterator","ordering","partial_cmp","formatter","AllocError","SliceDeque","IntoIter","DrainFilter"];

searchIndex["slice_deque"]={"doc":"A double-ended queue that `Deref`s into a slice.","i":[[3,"Buffer","slice_deque","Mirrored memory buffer of length `len`.",N,N],[3,R[29],E,"A double-ended queue that derefs into a slice.",N,N],[3,"Drain",E,"A draining iterator for `SliceDeque<T>`.",N,N],[3,R[30],E,"An iterator that moves out of a deque.",N,N],[3,"Splice",E,"A splicing iterator for `SliceDeque`.",N,N],[3,R[31],E,"An iterator produced by calling `drain_filter` on…",N,N],[4,R[28],E,"Allocation error.",N,N],[13,"Oom",E,"The system is Out-of-memory.",0,N],[13,"Other",E,"Other allocation errors (not out-of-memory).",0,N],[11,"len",E,"Number of elements in the buffer.",1,[[["self"]],[R[0]]]],[11,"is_empty",E,"Is the buffer empty?",1,[[["self"]],["bool"]]],[11,"ptr",E,"Pointer to the first element in the buffer.",1,[[["self"]]]],[11,R[3],E,"Interprets contents as a slice.",1,[[["self"]]]],[11,R[4],E,"Interprets contents as a mut slice.",1,[[["self"]]]],[11,"get",E,"Interprets content as a slice and access the `i`-th element.",1,[[["self"],[R[0]]],[T]]],[11,"get_mut",E,"Interprets content as a mut slice and access the `i`-th…",1,[[["self"],[R[0]]],[T]]],[11,"new",E,"Creates a new empty `Buffer`.",1,[[],["self"]]],[11,R[2],E,"Creates a new empty `Buffer` from a `ptr` and a `len`.",1,[[[R[0]]],["self"]]],[11,"size_in_bytes",E,"Total number of bytes in the buffer.",1,[[[R[0]]],[R[0]]]],[11,"uninitialized",E,"Create a mirrored buffer containing `len` `T`s where the…",1,[[[R[0]]],[[R[1]],[R[6],[R[1]]]]]],[11,"new",E,"Creates a new empty deque.",2,[[],["self"]]],[11,R[2],E,"Creates a SliceDeque from its raw components.",2,[[[R[0]]],["self"]]],[11,"with_capacity",E,"Create an empty deque with capacity to hold `n` elements.",2,[[[R[0]]],["self"]]],[11,"capacity",E,"Returns the number of elements that the deque can hold…",2,[[["self"]],[R[0]]]],[11,"len",E,"Number of elements in the ring buffer.",2,[[["self"]],[R[0]]]],[11,"is_full",E,"Is the ring buffer full ?",2,[[["self"]],["bool"]]],[11,R[3],E,"Extracts a slice containing the entire deque.",2,[[["self"]]]],[11,R[4],E,"Extracts a mutable slice containing the entire deque.",2,[[["self"]]]],[11,"as_slices",E,R[5],2,[[["self"]]]],[11,"as_mut_slices",E,R[5],2,[[["self"]]]],[11,"tail_head_slice",E,"Returns the slice of uninitialized memory between the…",2,[[["self"]]]],[11,"try_reserve",E,"Attempts to reserve capacity for inserting at least…",2,[[["self"],[R[0]]],[[R[6],[R[1]]],[R[1]]]]],[11,"reserve",E,"Reserves capacity for inserting at least `additional`…",2,[[["self"],[R[0]]]]],[11,"reserve_exact",E,"Reserves the minimum capacity for exactly `additional`…",2,[[["self"],[R[0]]]]],[11,"move_head_unchecked",E,R[7],2,[[["self"],[R[9]]]]],[11,"move_head",E,R[7],2,[[["self"],[R[9]]]]],[11,"move_tail_unchecked",E,R[8],2,[[["self"],[R[9]]]]],[11,"move_tail",E,R[8],2,[[["self"],[R[9]]]]],[11,"steal_from_slice",E,"Steal the elements from the slice `s`. You should…",2,[[],["self"]]],[11,"append",E,"Moves all the elements of `other` into `Self`, leaving…",2,[[["self"]]]],[11,"front",E,"Provides a reference to the first element, or `None` if…",2,[[["self"]],[[R[10]],[T]]]],[11,"front_mut",E,"Provides a mutable reference to the first element, or…",2,[[["self"]],[[T],[R[10]]]]],[11,"back",E,"Provides a reference to the last element, or `None` if the…",2,[[["self"]],[[R[10]],[T]]]],[11,"back_mut",E,"Provides a mutable reference to the last element, or…",2,[[["self"]],[[T],[R[10]]]]],[11,"try_push_front",E,"Attempts to prepend `value` to the deque.",2,[[["self"],[T]],[R[6]]]],[11,"push_front",E,"Prepends `value` to the deque.",2,[[["self"],[T]]]],[11,"try_push_back",E,"Attempts to appends `value` to the deque.",2,[[["self"],[T]],[R[6]]]],[11,"push_back",E,"Appends `value` to the deque.",2,[[["self"],[T]]]],[11,"pop_front",E,"Removes the first element and returns it, or `None` if the…",2,[[["self"]],[R[10]]]],[11,"pop_back",E,"Removes the last element from the deque and returns it, or…",2,[[["self"]],[R[10]]]],[11,"shrink_to_fit",E,"Shrinks the capacity of the deque as much as possible.",2,[[["self"]]]],[11,"truncate_back",E,R[11],2,[[["self"],[R[0]]]]],[11,"truncate",E,R[11],2,[[["self"],[R[0]]]]],[11,"truncate_front",E,R[11],2,[[["self"],[R[0]]]]],[11,"drain",E,"Creates a draining iterator that removes the specified…",2,[[["self"],["r"]],["drain"]]],[11,"clear",E,"Removes all values from the deque.",2,[[["self"]]]],[11,"swap_remove_back",E,"Removes the element at `index` and return it in `O(1)` by…",2,[[["self"],[R[0]]],[R[10]]]],[11,"swap_remove_front",E,"Removes the element at `index` and returns it in `O(1)` by…",2,[[["self"],[R[0]]],[R[10]]]],[11,"insert",E,"Inserts an `element` at `index` within the deque, shifting…",2,[[["self"],[R[0]],[T]]]],[11,"remove",E,"Removes and returns the element at position `index` within…",2,[[["self"],[R[0]]],[T]]],[11,"split_off",E,"Splits the collection into two at the given index.",2,[[["self"],[R[0]]],["self"]]],[11,"retain",E,"Retains only the elements specified by the predicate.",2,[[["self"],["f"]]]],[11,"dedup_by_key",E,R[12],2,[[["self"],["f"]]]],[11,"dedup_by",E,R[12],2,[[["self"],["f"]]]],[11,"splice",E,"Creates a splicing iterator that replaces the specified…",2,[[["self"],["i"],["r"]],["splice"]]],[11,"drain_filter",E,"Creates an iterator which uses a closure to determine if…",2,[[["self"],["f"]],["drainfilter"]]],[11,"extend_from_slice",E,"Clones and appends all elements in a slice to the…",2,[[["self"]]]],[11,"resize",E,"Modifies the `SliceDeque` in-place so that `len()` is…",2,[[["self"],[R[0]],[T]]]],[11,"resize_default",E,"Resizes the `SliceDeque` in-place so that `len` is equal…",2,[[["self"],[R[0]]]]],[11,"dedup",E,"Removes consecutive repeated elements in the deque.",2,[[["self"]]]],[11,"remove_item",E,"Removes the first instance of `item` from the deque if the…",2,[[["self"],[T]],[R[10]]]],[11,R[3],E,"Returns the remaining items of this iterator as a slice.",3,[[["self"]]]],[11,R[4],E,"Returns the remaining items of this iterator as a mutable…",3,[[["self"]]]],[14,"sdeq",E,"Creates a [`SliceDeque`] containing the arguments.",N,N],[11,R[13],E,E,1,[[["self"]],[T]]],[11,R[14],E,E,1,[[[T],["self"]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[15],E,E,1,[[[U]],[R[6]]]],[11,R[16],E,E,1,[[],[R[6]]]],[11,R[17],E,E,1,[[["self"]],[T]]],[11,R[20],E,E,1,[[["self"]],[T]]],[11,R[19],E,E,1,[[["self"]],[R[21]]]],[11,R[13],E,E,2,[[["self"]],[T]]],[11,R[14],E,E,2,[[[T],["self"]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[18],E,E,2,[[],["i"]]],[11,"into",E,E,2,[[],[U]]],[11,R[15],E,E,2,[[[U]],[R[6]]]],[11,R[16],E,E,2,[[],[R[6]]]],[11,R[17],E,E,2,[[["self"]],[T]]],[11,R[20],E,E,2,[[["self"]],[T]]],[11,R[19],E,E,2,[[["self"]],[R[21]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[18],E,E,4,[[],["i"]]],[11,"into",E,E,4,[[],[U]]],[11,R[15],E,E,4,[[[U]],[R[6]]]],[11,R[16],E,E,4,[[],[R[6]]]],[11,R[17],E,E,4,[[["self"]],[T]]],[11,R[20],E,E,4,[[["self"]],[T]]],[11,R[19],E,E,4,[[["self"]],[R[21]]]],[11,R[13],E,E,3,[[["self"]],[T]]],[11,R[14],E,E,3,[[[T],["self"]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[18],E,E,3,[[],["i"]]],[11,"into",E,E,3,[[],[U]]],[11,R[15],E,E,3,[[[U]],[R[6]]]],[11,R[16],E,E,3,[[],[R[6]]]],[11,R[17],E,E,3,[[["self"]],[T]]],[11,R[20],E,E,3,[[["self"]],[T]]],[11,R[19],E,E,3,[[["self"]],[R[21]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[18],E,E,5,[[],["i"]]],[11,"into",E,E,5,[[],[U]]],[11,R[15],E,E,5,[[[U]],[R[6]]]],[11,R[16],E,E,5,[[],[R[6]]]],[11,R[17],E,E,5,[[["self"]],[T]]],[11,R[20],E,E,5,[[["self"]],[T]]],[11,R[19],E,E,5,[[["self"]],[R[21]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[18],E,E,6,[[],["i"]]],[11,"into",E,E,6,[[],[U]]],[11,R[15],E,E,6,[[[U]],[R[6]]]],[11,R[16],E,E,6,[[],[R[6]]]],[11,R[17],E,E,6,[[["self"]],[T]]],[11,R[20],E,E,6,[[["self"]],[T]]],[11,R[19],E,E,6,[[["self"]],[R[21]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[15],E,E,0,[[[U]],[R[6]]]],[11,R[16],E,E,0,[[],[R[6]]]],[11,R[17],E,E,0,[[["self"]],[T]]],[11,R[20],E,E,0,[[["self"]],[T]]],[11,R[19],E,E,0,[[["self"]],[R[21]]]],[11,"drop",E,E,1,[[["self"]]]],[11,"drop",E,E,2,[[["self"]]]],[11,"drop",E,E,4,[[["self"]]]],[11,"drop",E,E,3,[[["self"]]]],[11,"drop",E,E,5,[[["self"]]]],[11,"drop",E,E,6,[[["self"]]]],[11,"as_mut",E,E,2,[[["self"]]]],[11,"next",E,E,4,[[["self"]],[R[10]]]],[11,R[22],E,E,4,[[["self"]]]],[11,"next",E,E,3,[[["self"]],[R[10]]]],[11,R[22],E,E,3,[[["self"]]]],[11,"count",E,E,3,[[],[R[0]]]],[11,"next",E,E,5,[[["self"]],[R[10]]]],[11,R[22],E,E,5,[[["self"]]]],[11,"next",E,E,6,[[["self"]],[R[10]]]],[11,R[22],E,E,6,[[["self"]]]],[11,"eq",E,E,2,[[["self"],["slicedeque"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"],["vec"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"eq",E,E,2,[[["self"]],["bool"]]],[11,"as_ref",E,E,2,[[["self"]]]],[11,"default",E,E,1,[[],["self"]]],[11,"default",E,E,2,[[],["self"]]],[11,R[23],E,E,4,[[["self"]],[R[10]]]],[11,R[23],E,E,3,[[["self"]],[R[10]]]],[11,R[23],E,E,5,[[["self"]],[R[10]]]],[11,"clone",E,E,1,[[["self"]],["self"]]],[11,"clone",E,E,2,[[["self"]],["self"]]],[11,"clone_from",E,E,2,[[["self"],["self"]]]],[11,"clone",E,E,3,[[["self"]],["self"]]],[11,"from",E,E,2,[[],["self"]]],[11,"from",E,E,2,[[],["self"]]],[11,R[18],E,"Creates a consuming iterator, that is, one that moves each…",2,[[],["intoiter"]]],[11,"extend",E,E,2,[[["self"],[R[24]]]]],[11,"extend",E,E,2,[[["self"],[R[24]]]]],[11,R[26],E,E,2,[[["self"]],[[R[10],[R[25]]],[R[25]]]]],[11,R[26],E,E,2,[[["self"]],[[R[10],[R[25]]],[R[25]]]]],[11,"deref_mut",E,E,2,[[["self"]]]],[11,"deref",E,E,2,[[["self"]]]],[11,"fmt",E,E,0,[[["self"],[R[27]]],[R[6]]]],[11,"fmt",E,E,2,[[["self"],[R[27]]],[["error"],[R[6],["error"]]]]],[11,"fmt",E,E,4,[[["self"],[R[27]]],[R[6]]]],[11,"fmt",E,E,3,[[["self"],[R[27]]],[R[6]]]],[11,"fmt",E,E,5,[[["self"],[R[27]]],[R[6]]]],[11,"fmt",E,E,6,[[["self"],[R[27]]],[R[6]]]],[11,"hash",E,E,2,[[["self"],["h"]]]],[11,"from_iter",E,E,2,[[[R[24]]],["self"]]]],"p":[[4,R[28]],[3,"Buffer"],[3,R[29]],[3,R[30]],[3,"Drain"],[3,"Splice"],[3,R[31]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);