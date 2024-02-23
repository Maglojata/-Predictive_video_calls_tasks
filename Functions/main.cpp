#include <QCoreApplication>

int add(int a, int b){
    return a + b;
}

int sub(int a, int b) {
    return a - b;
}

int mul(int a, int b) {
    return a * b;
}

double divide(double a, double b){
    if (b == 0) {
        return 0;
    }
    return a / b;
}


int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    qDebug() << add(5, 8);
    qDebug() << sub(8, 10);
    qDebug() << mul(7, 9);
    qDebug() << divide(10.0, 2.0);


    return a.exec();
}
