#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
    num = ui->lineEdit->text().toInt();
    ui->lineEdit->clear();

    if (num > 0) {
        ui->isValidLBL->setText("positive");

        switch (num) {
        case 90 ... 100:
            ui->checkingLBL->setText("A");
            break;
        case 80 ... 89:
            ui->checkingLBL->setText("B");
            break;
        case 70 ... 79:
            ui->checkingLBL->setText("C");
            break;
        case 60 ... 69:
            ui->checkingLBL->setText("D");
            break;
        case 50 ... 59:
            ui->checkingLBL->setText("E");
            break;
        default:
            if (num > 100) {
                ui->checkingLBL->setText("invalid value, can't be more than 100");
            } else {
                ui->checkingLBL->setText("F");
            }
            break;
        }
    } else if (num == 0) {
        ui->isValidLBL->setText("0");
    } else {
        ui->isValidLBL->setText("negative");
    }
}

void MainWindow::on_pushButton_2_clicked()
{
    timer = new QTimer(this);
    timer->setInterval(10000);

    for (int i = 0; i <= 10; ++i) {
        timer->start();
        ui->loopLBL->setText(QString::number(i));
    }
}
