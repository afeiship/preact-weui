# Dialog
> Preact dialog

## properties:
+ header
+ body
+ footer


## usage:
```js
  // confirm:
  WeuiDialogCtrl.show({
    header:'这是一个标题，可以为一行或者两行。',
    body:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
    footer:[
      {
        content:'辅助操作',
        theme:'default',
        onClick:()=>{
          console.log('secondary action');
        }
      },
      {
        content:'主操作',
        theme:'primary',
        onClick:()=>{
          console.log('primary action');
        }
      }
    ]
  });

  // alert:
  WeuiDialogCtrl.show({
    body:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
    footer:[
      {
        content:'知道了',
        theme:'primary',
        onClick:()=>{
          console.log('OK!');
        }
      }
    ]
  });
```
