-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: desafio-ceuma
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Alunos`
--

DROP TABLE IF EXISTS `Alunos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Alunos` (
  `idAluno` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `idCursos` int(11) NOT NULL,
  PRIMARY KEY (`idAluno`),
  KEY `fk_Alunos_Cursos_idx` (`idCursos`),
  CONSTRAINT `fk_Alunos_Cursos` FOREIGN KEY (`idCursos`) REFERENCES `Cursos` (`idCurso`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alunos`
--

LOCK TABLES `Alunos` WRITE;
/*!40000 ALTER TABLE `Alunos` DISABLE KEYS */;
INSERT INTO `Alunos` VALUES (19,'Juliana Santos','60512718900','São Luís','65059668','juliana@santos.com','98 98933971',1),(20,'Regina Silva','65023457800','São Paulo','60598999','regina@silva.com','89 989124578',1),(21,'Eduardo Pereira','65023789800','Rio de Janeiro','60598999','eduardo@pereira.com','89 989128911',2),(22,'Gomes Santos','67202378900','Rio de Janeiro','6058229','gomes@santos.com','89 892212333',1),(23,'Lauro Santos','67302378900','Rio de Janeiro','6058229','lauro@santos.com','89 895512333',2),(24,'Henrique Sirqueira','895677790','Baixada Maranhense','6258225','henrique@sirqueira.com','89 895512333',3),(25,'Juliana Maria','895677790','Cohatrac','65012225','juliana@maria.com','99 895512333',3);
/*!40000 ALTER TABLE `Alunos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cursos`
--

DROP TABLE IF EXISTS `Cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cursos` (
  `idCurso` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `dataRegistro` date DEFAULT NULL,
  `cargaHoraria` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cursos`
--

LOCK TABLES `Cursos` WRITE;
/*!40000 ALTER TABLE `Cursos` DISABLE KEYS */;
INSERT INTO `Cursos` VALUES (1,'Medicina','2019-10-10',80),(2,'Direito','2019-10-10',120),(3,'Administração','2019-10-10',90);
/*!40000 ALTER TABLE `Cursos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-11 11:48:55
