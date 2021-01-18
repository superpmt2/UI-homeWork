function fake(opts){
    let {
      element = '.fake-select',
      slot = '.J-select-slot',
    } = opts;
    let select = $(element).find('select');
    select.on('change', function () {
      let $this = $(this);
      let val = $this.find('option:selected').val();
      let text = $this.find('option:selected').text();
      //$(this).siblings().find('.J-select-slot').text(val).removeClass('placeholder');
    })
  }

fake({
      element: '.fake-select',     //表示包圍這個select的父元素
      slot: '.J-select-slot',        //表示select值改變，將這個值放到那個容器裡
    });