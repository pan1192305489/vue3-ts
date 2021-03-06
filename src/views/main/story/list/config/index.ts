export const contentTableConfig = {
  title: '故事列表',
  propsList: [
    { prop: 'id', label: '文章ID', minWidth: '100' },
    { prop: 'title', label: '文章标题', minWidth: '100' },
    { prop: 'content', label: '文章内容', minWidth: '500' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
