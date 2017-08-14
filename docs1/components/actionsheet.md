# ActionSheet
> Preact actionsheet

## properties:
+ title
+ items
+ onClick

## usage:
```js
  WeuiActionSheetCtrl.show({
    title:'这是一个标题，可以为一行或者两行。',
    items:[{
      role:'menu',
      content:'Are you sure?'
    },{
      role:'menu',
      content:'Once deleted, you will never find it.'
    },{
      role:'action',
      content:'Cancel',
      action:'cancel'
    }],
    onClick:(inEvent)=>{
      console.log(inEvent);
    }
  }).then(()=>{
    console.log('shown!')
  });
```

