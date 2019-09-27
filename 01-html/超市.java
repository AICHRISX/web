

class Main {
	public static void main(String[] args) {
		System.out.println("Hello JSRUN!   \n\n         - from JAVA .");


			package d1;
			import java.util.Scanner;
			import javax.swing.JFrame;
			public class demo {
			public static void main(String[]args){
			JFrame jf=new JFrame();
			jf.setSize(600,600)
			jf.setTitle("我的世界");
			jf.setVisible(true);
			Scanner scan=new Scanner(System.in);
			System.out.println("单价");
			double a=scan.nextDouble();
			System.out.println("数量");
			Double b=scan.nextDouble();
			System.out.println("总价");
			double c=a*b;
			System.out.println("总价+c+元,请付款");
			double d=scan.nextDouble();
			System.out.println("收您"+d+"元",找零"+(d-c)+元")；
			System.out.println("------------------------");
			System.out.println("欢迎您下次光临");
			Date date=new Date();
			SimpleDateFormat zxc=
			new SimpleDateFormat("yyyy-mm-dd hh-mm-ss");
			System.out.println(zxc.format(date));	
			}




	}
}



