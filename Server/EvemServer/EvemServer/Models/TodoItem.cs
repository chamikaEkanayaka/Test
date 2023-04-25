using System;
namespace EvemServer.Models
{
	public class TodoItem
	{
		public string evTitle { get; set; }
		public string evDescription { get; set; }
		public string mainImgPth { get; set; }
		public string recSinEvnt { get; set; }
		public DateTime stDateTime { get; set; }
		public DateTime enDateTime { get; set; }
		public string phyOnlEvt { get; set; }
		public string locations { get; set; }
		public string dcmtPth { get; set; }
		public string cmteMbrs { get; set; }
        public long Id { get; internal set; }
    }
}

